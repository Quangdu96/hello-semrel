const Configuration = {
  /*
   * Resolve and load @commitlint/config-conventional, conventional-changelog-conventionalcommits, @commitlint/format from node_modules.
   * Referenced packages must be installed
   */
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-conventionalcommits",
  formatter: "@commitlint/format"
};

export default Configuration;
