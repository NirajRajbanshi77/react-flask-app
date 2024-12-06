import React, { useState, useEffect, useRef } from "react";
import * as posenet from "@tensorflow-models/posenet"; // PoseNet
import "@tensorflow/tfjs"; // TensorFlow.js
import "../Css/AnalyzeStyle.css";

const AnalysisPage = () => {
  const videoRef = useRef(null);
  const [poseLabel, setPoseLabel] = useState("Instance");
  const [confidence, setConfidence] = useState(0);

  useEffect(() => {
    // Start PoseNet and access the camera
    initializePoseNet();
  }, []);

  const initializePoseNet = async () => {
    const video = videoRef.current;

    // Access the webcam
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
        video.play();

        // Initialize PoseNet
        video.onloadeddata = async () => {
          const net = await posenet.load();
          console.log("PoseNet model loaded");

          // Detect poses in real-time
          detectPose(net);
        };
      })
      .catch((error) => console.error("Error accessing webcam:", error));
  };

  const detectPose = async (net) => {
    const video = videoRef.current;

    // Continuously detect poses
    setInterval(async () => {
      const pose = await net.estimateSinglePose(video, {
        flipHorizontal: false,
      });

      if (pose && pose.keypoints) {
        const keypoints = pose.keypoints.map((point) => ({
          x: point.position.x,
          y: point.position.y,
          score: point.score,
        }));

        sendToBackend(keypoints);
      }
    }, 500); // Send every 500ms
  };

  const sendToBackend = async (keypoints) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keypoints }),
      });

      const data = await response.json();
      setPoseLabel(data.label || "Unknown Shot");
      setConfidence((data.confidence * 100).toFixed(2));
    } catch (error) {
      console.error("Error sending keypoints to backend:", error);
    }
  };

  return (
    <div className="analysis-container">
      <h1>Cricket Shot Analysis</h1>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="video-player"
        id="video"
      />
      <div className="results">
        <p>
          <strong>Detected Shot:</strong> {poseLabel}
        </p>
        <p>
          <strong>Confidence:</strong> {confidence}%
        </p>
      </div>
    </div>
  );
};

export default AnalysisPage;
