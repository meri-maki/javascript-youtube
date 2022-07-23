//GETTERS AND SETTERS
const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    }
  },
  get todaySpecial() {
    if (this._meal && this._price) {
      return 'Today the special is ' + this._meal + ' for ' + this._price + '$!'
    } else {
      return 'Meal or price was not set correctly!'
    }
  }
}
menu._meal = 'carbonara';
menu._price = 19;

console.log(menu.todaySpecial)