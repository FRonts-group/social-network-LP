import getPosts from './utils/queryPosts.js';
import configFirebase from './utils/configFirebase.js';
import getTags from './utils/queryTags.js';


export const myFunction = async () => {

  // Init Firebase nuevamente
  firebase.initializeApp(configFirebase);
  await getPosts();
  await getTags();

};
