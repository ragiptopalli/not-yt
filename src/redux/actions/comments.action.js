import requestVideos from "../../api";

import {
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
  COMMENT_LIST_FAIL,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
} from "../actionTypes";

export const getCommentsByVideoId = (videoId) => async (dispatch) => {
  try {
    dispatch({
      type: COMMENT_LIST_REQUEST,
    });

    const { data } = await requestVideos("/commentThreads", {
      params: {
        part: "snippet",
        videoId: videoId,
      },
    });

    dispatch({
      type: COMMENT_LIST_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response.data.error);
    dispatch({
      type: COMMENT_LIST_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const addComment = (videoId, text) => async (dispatch, getState) => {
  try {
    const obj = {
      snippet: {
        videoId: videoId,
        topLevelComment: {
          snippet: {
            textOriginal: text,
          },
        },
      },
    };

    await requestVideos.post("/commentThreads", obj, {
      params: {
        part: "snippet",
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    dispatch({
      type: CREATE_COMMENT_SUCCESS,
    });

    setTimeout(() => dispatch(getCommentsByVideoId(videoId)), 3000);
  } catch (error) {
    console.log(error.response.data.error);
    dispatch({
      type: CREATE_COMMENT_FAIL,
      payload: error.response.data.message,
    });
  }
};
