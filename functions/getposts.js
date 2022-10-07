import User from "../Models/user.js";
import Post from "../Models/post.js";
import Follow from "../Models/follow.js";
import Like from "../Models/like.js";


export const getPosts = async (user_id, post_ids) => {

    let result = [];

    for (let i = 0; i < post_ids.length; i++) {
        const element = post_ids[i];

        var post = await Post.findOne({
            where: {
                id: element
            }
        })

        if (post == null) {
            result.push(null);
            continue;
        }


        var owner = await User.findOne({
            where: {
                id: post.user_id
            }
        });

        var likeUser = await Like.findAll({
            where: {
                post_id: post.id,
                user_id: user_id
            }
        });

        var followedUser = await Follow.findAll({
            where: {
                follower_id: user_id,
                following_id: owner.id
            }
        })


        result.push({
            id: post.id,
            description: post.description,
            image: post.image,
            created_at: post.created_at,
            liked: likeUser.length > 0,
            owner: {
                id: owner.id,
                username: owner.username,
                full_name: owner.full_name,
                profile_picture: owner.profile_picture,
                followed: followedUser.length > 0,
            }
        });
    }


    return result;
}