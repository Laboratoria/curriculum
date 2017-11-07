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
      speed: 100,
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
  
  const murderRobot = name => {
    const state = {
      name: name,
      speed: 100,
      position: 0
    };
  
    return Object.assign({}, driver(state), killer(state));
  };
  
  const murderDog = name => {
    const state = {
      name: name,
      speed: 100,
      position: 0
    };
  
    return Object.assign({}, barker(state), pooper(state), killer(state));
  };
  
  const murderRobotDog = name => {
    const state = {
      name: name,
      speed: 100,
      position: 0
    };
  
    return Object.assign({}, barker(state), driver(state), killer(state));
  };
  
  
  exports.murderRobot = murderRobot;
  exports.murderDog = murderDog;
  exports.murderRobotDog = murderRobotDog;