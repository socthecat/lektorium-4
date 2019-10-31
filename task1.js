function paycheckCalculator(p, h) {
    let _perHour = p;
    let _hoursWorked = h;

    return {
        getPerHour() {
            console.log("Your pay rate is " + _perHour + " dollars per hour.")
            return _perHour;
        },
        getHours() {
            console.log("You have worked " + _hoursWorked + " this month.")
            return _hoursWorked;
        },

        setPerHour(newPerHour) {
            if(typeof newPerHour ==="number" && newPerHour >= 0) {
                _perHour = newPerHour;
                console.log("Your pay rate is now " + _perHour + " dollars per hour.");
            } else {
                console.log("Have you heard of the high elves?")
            }
        },
        setHours(newHours) {
            if (typeof newHours ==="number" && newHours >= 0) {
                _hoursWorked = newHours;
                console.log("You have worked " + _hoursWorked + " this month.");
            } else {
                console.log("Is this sabotage?")
            }
        },

        calculatePay() {
            let pay = _perHour * _hoursWorked;
            console.log("You are estimated to receive " + pay + " dollars this month.");
            return pay;
        },
        fire() {
            [_perHour, _hoursWorked] = [0, 0];
            console.log("You are now fired and earn nothing. Congratulations.");
        }
    }
}

const Bob = paycheckCalculator(25, 120);
Bob.getHours();
Bob.getPerHour();
Bob.setPerHour(30);
Bob.setPerHour("a");
Bob.calculatePay();
Bob.fire();