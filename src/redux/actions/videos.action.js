import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
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
