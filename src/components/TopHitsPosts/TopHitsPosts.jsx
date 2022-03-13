import React from "react";
import {Link} from "react-router-dom";
import PreloadLink from "../preloadLink/PreloadLink";

function TopHitsPosts(props){
	const {topPosts} = props
	
	return React.useMemo(() => {
		return topPosts.posts && topPosts.posts.map((post, index) => (
			<PreloadLink to={`/posts/${post.slug}/${post._id}`} className="post_link_a">
				<div className="flex mx-4  my-4">
          <span
						className="text-dark-400 text-2xl font-bold whitespace-nowrap mr-4">{index < 9 ? 0 : ''}{index + 1}</span>
					<div>
						<div>
							<div className="flex align-center">
								{post.author.avatar
									? <img className="w-5 radius-100 mr-1" src={post.author.avatar} alt="avatar"/>
									: <img className="flex w-5 radius-100"
												 src="data:image/jpeg;base64,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"/>
								}
								<span className="ml-1 text-sm text-dark-500 dark:text-dark-100 font-medium">{post.author && post.author.first_name} { post.author && post.author.last_name && post.author.last_name}</span>
							</div>
							<h1 className="text-md sm:text-2xl dark:text-gray-200 font-medium">{post.title}</h1>
							<p className="mt-4 dark:text-dark-10 text-base">{post.summary}</p>
						</div>
						<p className="mt-2 text-sm text-gray-400">{new Date(post.created_at).toLocaleDateString()} - {post.time}</p>
					</div>
				
				</div>
			</PreloadLink>
		))
	}, [props.topPosts.posts])
	
}

export default TopHitsPosts