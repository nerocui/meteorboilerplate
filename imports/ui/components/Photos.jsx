import React from 'react';
const photos = [
	{
	  url: 'http://placekitten.com/1024/1024',
	  caption: 'Amazing beach in Goa, India',
	},
	{
	  url: 'http://placekitten.com/1024/1024',
	  caption: 'I met this monkey in Chinese mountains',
	},
	{
	  url: 'http://placekitten.com/1024/1024',
	  caption: 'Beautiful mountains in Zhangjiajie, China',
	},
];
export default () => (
	<PhotoBrowser theme='dark' photos={photos} type='page'/>
);
