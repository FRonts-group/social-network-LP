/** Class representing a post. */
export default class Post {
  /**
   * Create a post.
   * @param {number} id - The identifier.
   * @param {string} content - The content of the post.
   * @param {array[number]} gps - Array of latitude and longitude of location.
   * @param {number} idUser - The identifier of user.
   * @param {array[string]} img - A list of images.
   * @param {number} likes - The number of likes.
   * @param {boolean} privacy - Status of the publication, whether public or private.
   * @param {array[string]} tags - A list of tag id's that are related to the post.
   */
  constructor(id, content, gps, idUser, img, likes, privacy, tags) {
    this.id = id;
    this.content = content;
    this.gps = gps;
    this.idUser = idUser;
    this.img = img;
    this.likes = likes;
    this.privacy = privacy;
    this.tags = tags;
  }
}
