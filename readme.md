
Specs:

| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| Create Bear instance on page load with hunger level of 5 | n/a | Bear {name: "Ol Grizz", foodlevel: 5} |
| Initialize countdown of 'foodlevel' with start button click event | click 'start' | 5,4,3,2,1 |
| Increment 'foodlevel' by with with 'feed' button click event | click 'feed' | food level: 4, click 'feed', food level 5 |
| Bear ceases foodlevel decrement for 15 seconds upon reaching 10 foodlevel | Bear {name: "Ol Grizz", foodlevel: 10} | No foodlevel attrition for 15 seconds
| Alert user to being eaten (losing the game) if and when 'foodlevel' reaches 0 | Bear {name: "Ol Grizz", foodlevel: 0} | Alert('You dun been eaten by a bear!')|
