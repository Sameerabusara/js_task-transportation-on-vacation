/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const daily_rate = 40;
  const short_term_discount = 20;
  const long_term_discount = 50;
  const long_term = 7;
  const short_term = 3;
  
  if (days >= long_term) {
    return days * daily_rate - long_term_discount;
  } if (days >= short_term) {
    return days * daily_rate - short_term_discount;
  } if (days < short_term) {
    return days * daily_rate;
  }
}

module.exports = calculateRentalCost;
