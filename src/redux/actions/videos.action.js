import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  RELATED_VIDEOS_FAIL,
  RELATED_VIDEOS_REQUEST,
  RELATED_VIDEOS_SUCCESS,
  SEARCHED_VIDEO_FAIL,
  SEARCHED_VIDEO_REQUEST,
  SEARCHED_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
} from "../actionTypes";
import requestVideos from "../../api.js";

export const getPopularVideos = () => async (dispatch, getState) => {
  dispatch({
    type: HOME_VIDEOS_REQUEST,
  });
  try {
    const { data } = await requestVideos("/videos", {
      params: {
        part: "snippet, contentDetails, statistics",
        chart: "mostPopular",
        maxResults: 21,
        pageToken: getState().homeVideoItems.nextPageToken,
        regionCode: "AL",
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videoItems: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const getVideosByCategory = (q) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const { data } = await requestVideos("/search", {
      params: {
        part: "snippet",
        q,
        type: "video",
        maxResults: 21,
        pageToken: getState().homeVideoItems.nextPageToken,
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videoItems: data.items,
        nextPageToken: data.nextPageToken,
        category: q,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const getVideosById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_VIDEO_REQUEST,
    });

    const { data } = await requestVideos("/videos", {
      params: {
        part: "snippet, statistics",
        id: id,
      },
    });

    dispatch({
      type: SELECTED_VIDEO_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SELECTED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};

export const getRelatedVideos = (videoId) => async (dispatch) => {
  dispatch({
    type: RELATED_VIDEOS_REQUEST,
  });
  try {
    const { data } = await requestVideos("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: videoId,
        maxResults: 15,
        type: "video",
      },
    });

    dispatch({
      type: RELATED_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: RELATED_VIDEOS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getVideosBySearch = (q) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCHED_VIDEO_REQUEST,
    });
    const { data } = await requestVideos("/search", {
      params: {
        part: "snippet",
        q,
        type: "video, channel",
        maxResults: 21,
      },
    });

    dispatch({
      type: SEARCHED_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SEARCHED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};
