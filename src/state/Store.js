import { observable, action } from 'mobx';

class MarketingStore {
    @observable states = {
        GOOD: false,
        FAST: false,
        CHEAP: false,
    }

    @observable colors = {
        GOOD: 'blue',
        FAST: 'green',
        CHEAP: 'red'
    }

    @action updateThe = (stateName) => {
        this.states[stateName] = !this.states[stateName];
        const allAreTrue =  this.states.GOOD === true &&
                            this.states.FAST === true &&
                            this.states.CHEAP === true
        switch(stateName) {
            case('GOOD') :
                if(allAreTrue) {
                    this.states.FAST = false;
                }
                break;
            case('FAST') : 
                if(allAreTrue) {
                    this.states.GOOD = false;
                }
                break;
            case ('CHEAP') : 
                if(allAreTrue) {
                    this.states.GOOD = false;
                }
                break;
            default: break;
            }
    }
}

export const marketingStore = new MarketingStore();
