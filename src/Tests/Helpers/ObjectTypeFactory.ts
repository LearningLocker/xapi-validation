export default (types, defaultType, test) => {
  Object.keys(types).forEach(type =>
    types[type]((data, valid) =>
      test(Object.assign({}, {
        objectType: type,
      }, valid))
    )
  );
  types[defaultType](test);
};
