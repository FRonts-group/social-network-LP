/** Class representing a user. */
export default class User {
  /**
   * Create a user.
   * @param {number} id - The identifier.
   * @param {string} name - The name.
   * @param {array[string]} follows - Following list of user ids.
   * @param {array[string]} saved - List of ids of saved posts.
   */
  constructor(id, name, follows, saved) {
    this.id = id;
    this.name = name;
    this.follows = follows;
    this.saved = saved;
  }
}
