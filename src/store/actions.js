/*
* 商城用的actions
 */

export default {
  saveUserName(context, userName) {
    context.commit('saveUserName', userName);
  },
  saveCartCount(context, count) {
    context.commit('saveCartCount', count);
  },
};
