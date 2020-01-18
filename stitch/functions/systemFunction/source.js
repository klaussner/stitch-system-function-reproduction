exports = function() {
  return {
    user: context.user,
    runningAsSystem: context.runningAsSystem()
  };
};
