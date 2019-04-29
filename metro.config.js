/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

/*module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
        babelTransformerPath: require.resolve("react-native-sass-transformer"),
      },
      resolver: {
	      sourceExts: [...sourceExts, "scss", "sass"]
	  },	
    }),
  },
};*/

const { getDefaultConfig } = require("metro-config");
 
module.exports = (async () => {
  const {
    resolver: { sourceExts } 
  } = await getDefaultConfig();
  return {
    transformer: {
    	experimentalImportSupport: false,
        inlineRequires: false,
      	babelTransformerPath: require.resolve("react-native-sass-transformer")
    },
    resolver: {
      	sourceExts: [...sourceExts, "scss", "sass"]
    }
  };
})();
