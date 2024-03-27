import { store } from '@labshare/polus-render';

const imageUrl = new URLSearchParams(window.location.search).get('imageUrl');

store.setState({
  inputState: { viewState: null, channelState: null },
});

store.setState({
  urls: [imageUrl],
});
