<template>
	<view>
		<p>{{name}}</p>
		<button @click="hello">点我</button>
	</view>
</template>

<script lang="ts">
	export default {
		onLoad() {
			console.log('onload');
		},
		onShow() {
			console.log('onshow')
		},
		onReady() {
			console.log('onready');
		},
		onHide() {
			console.log('onhide');
		},
		onTabItemTap() {
			console.log('点击了当前item');
		},
		data() {
			return {
				name: '关于我'
			};
		},
		methods: {
			hello() {
				console.log('say hello')
				uni.$emit('toIndex', {msg: 'i am hello'})
			}
		}
	}
</script>

<style>

</style>
