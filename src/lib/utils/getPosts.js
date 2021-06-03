const getPosts = async () => {
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

export default getPosts;
