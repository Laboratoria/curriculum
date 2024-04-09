function getDependencies(mod, result) {
  result = result || [];
  const dependencies = mod && mod.dependencies || [];
  Object.keys(dependencies).forEach(dep => {
    const key = dep + '@' + mod.dependencies[dep].version;
    if (result.indexOf(key) === -1) result.push(key);
    getDependencies(mod.dependencies[dep], result);
  });
  return result.sort();
}

export default getDependencies;
