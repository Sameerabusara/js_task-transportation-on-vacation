/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let daily_rate = 40;
  let short_term_discount = 20;
  let long_term_discount = 50;
  let seven = 7;
  let three = 3;
  
  if (days >= seven) {
    return days * daily_rate - long_term_discount;
  } if (days >= three) {
    return days * daily_rate - short_term_discount;
  } if (days < three) {
    return days * daily_rate;
  }
}

module.exports = calculateRentalCost;
