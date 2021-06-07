//Query functions to the database post

/**
 * TODO Get all posts.
 * @param {boolean} privacy - true: mostrar los posts publicos ; false: mostrar posts privados.
 */
const getPosts = async (privacy) => {
  const database = firebase.database();
  let data = [];
  try {

    const postsData = await database.ref('posts/');
    postsData.on('value', (snapshot) => {
      data = snapshot.val();
      console.log(data);
    });

    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };

}

// TODO Set a new post
const setPost = async () => { }

// TODO Increase likes in a post
const increaseLikes = async (id) => { }

// TODO Get the post by ID
const getPostbyID = async (id) => {}

// TODO Get the post by idUser
const getPostbyIdUser = async (idUser) => { }

// TODO Get the post by IdTag
const getPostbyIdTag = async (tag) => { }

export default getPosts;
