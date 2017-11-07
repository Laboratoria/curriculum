const pooper = state => ({
    poop: () => console.log('💩')
  });
  
  const barker = state => ({
    bark: () => console.log('woof! my name is ' + state.name)
  });
  
  const driver = state => ({
    drive: () => state.position = state.position + state.speed
  });
  
  const killer = state => ({
    kill: () => console.log('time to kill!')
  });
  
  const dog = name => {
    const state = {
      name: name,
      speed: 20,
      position: 0
    };
  
    return Object.assign({}, pooper(state), barker(state));
  };
  
  const robot = name => {
    const state = {
      name: name,
      speed: 100,
      position: 0
    };
  
    return Object.assign({}, driver(state));
  };
  
  const murderRobot = // ... tu código acá
  const murderDog = // ... tu código acá
  const murderRobotDog = // ... tu código acá
  
  exports.murderRobot = murderRobot;
  exports.murderDog = murderDog;
  exports.murderRobotDog = murderRobotDog;