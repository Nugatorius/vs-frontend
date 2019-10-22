import { types } from '../../actions/types';
import postsReducer from '../posts/reducer';

describe('Posts Reducer', () => {
  it('Should return default state', () => {
    const newState = postsReducer(undefined,{});
    expect(newState).toEqual([]);
  })

  it('Should return new state if type is received', () => {
    const posts = [{title: 'Title1'},{title: 'Title2'},{title: 'Title3'}];
    const action = {
      type: types.GET_POSTS,
      payload: posts
    }
    const newState = postsReducer(undefined,action);
    expect(newState).toEqual(posts);
  })
})
