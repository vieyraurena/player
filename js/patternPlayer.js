/*
class context {
  constructor(states = undefined) {
    this.states = states;
  }

  play() {
      this.state.play();
  }

  pause() {
      this.state.pause();
  }

  changeState(state) {
    if (this.state !== state) {
        this.state.play();
        this.state = state;
        this.state.pause();
        this.state.next();
        this.state.previus();
    }
  }
}
*/

class EventManager {
  constructor() {
    this.list = [];
  }

  subscribe(observer) {
    this.list.push(observer);
  }

  onChange(data) {
    this.list.forEach(observer => observer.update(data));
  }
}

class Observer {
  update(data) {

  }
}

export {
  EventManager,
  Observer
}