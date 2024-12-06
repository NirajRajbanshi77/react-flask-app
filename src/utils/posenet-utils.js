export const filterKeypoints = (keypoints, minConfidence = 0.5) => {
    return keypoints.filter(({ score }) => score >= minConfidence);
  };
  