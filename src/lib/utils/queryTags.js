//Query functions to the database tags

// TODO Get all posts.
const getTags = async () => {
  const database = firebase.database();
  let data = [];
  try {

    const postsData = await database.ref('tags/');
    postsData.on('value', (snapshot) => {
      data = snapshot.val();
      console.log(data);
    });

    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };

}
export default getTags;
