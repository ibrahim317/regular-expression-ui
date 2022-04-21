const mainRulesList = (
  state = {
    mainRules: [
      {
        get value() {
          return `When { ${this.arg} } `;
        },
        arg: "",
        icon: "gg-remote",
        name: "Term",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue et metus ut rutrum. Fusce suscipit nisi et dictum egestas. Aliquam orci neque, rutrum et mattis sed, dapibus eget dolor.r",
        id: 1,
        droped: false,
      },
      {
        get value() {
          return `  Number{ ${this.arg} } `;
        },
        arg: "",
        icon: "gg-hashtag",
        name: "Number",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue et metus ut rutrum. Fusce suscipit nisi et dictum egestas. Aliquam orci neque, rutrum et mattis sed, dapibus eget dolor.e",
        id: 2,
        droped: false,
      },
      {
        get value() {
          return ``;
        },
        arg: "",
        icon: "gg-format-color",
        name: "Spacial Character",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue et metus ut rutrum. Fusce suscipit nisi et dictum egestas. Aliquam orci neque, rutrum et mattis sed, dapibus eget dolor.w",
        id: 3,
        droped: false,
      },
      {
        get value() {
          return ` is in proximity of { ${this.arg[0]} } Words of { ${this.arg[1]} }`;
        },
        arg: ["", ""],
        icon: "gg-arrows-merge-alt-h",
        name: "Proximity",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue et metus ut rutrum. Fusce suscipit nisi et dictum egestas. Aliquam orci neque, rutrum et mattis sed, dapibus eget dolor.q",
        id: 4,
        droped: false,
      },
    ],
    dropedRules: [],
    resultString: "",
  },
  action
) => {
  switch (action.type) {
    case "ADDED":
      state.resultString = "";
      state.mainRules.forEach((e) => {
        if (e.id === action.payload.id && e.droped === false) {
          e.droped = true;
          state.dropedRules.push(action.payload);
        }
        if (e.droped === true) {
          state.resultString += e.value;
        }
      });
      return state;
    case "REMOVED":
      state.mainRules.forEach((e) => {
        state.resultString = "";
        if (e.id === action.payload) {
          e.droped = false;
          state.dropedRules = state.dropedRules.filter(
            (e) => action.payload !== e.id
          );
        }
        if (e.droped === true) {
          state.resultString += e.value;
        }
      });
      return state;

    default:
      return state;
  }
};

export default mainRulesList;
