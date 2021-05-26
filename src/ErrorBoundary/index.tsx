import React, { Component, ErrorInfo } from 'react';

export type ErrorBoundaryPropType = {};

export type ErrorBoundaryStateType = {
	hasError: boolean;
};

export default class ErrorBoundary extends Component<
	ErrorBoundaryPropType,
	ErrorBoundaryStateType
> {
	state = { hasError: false };

	static getSnapshotBeforeUpdate(){
		// 更新 state 使下一次渲染能够显示降级后的 UI
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// 你同样可以将错误日志上报给服务器
		console.error({ error, errorInfo });
	}

	render() {
		if (this.state.hasError) {
			// 你可以自定义降级后的 UI 并渲染
			return <h1>Something went wrong.</h1>;
		}
		return this.props.children;
	}
}
