import requestVideos from "../../api";

import {
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  CHANNEL_DETAILS_FAIL,
  CHANNEL_SUBSCRIPTION_STATUS,
} from "../actionTypes";

export const getChannelDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CHANNEL_DETAILS_REQUEST,
    });

    const { data } = await requestVideos("/channels", {
      params: {
        part: "snippet, contentDetails, statistics",
        id: id,
      },
    });

    dispatch({
      type: CHANNEL_DETAILS_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: CHANNEL_DETAILS_FAIL,
      payload: error.response.data,
    });
  }
};

export const checkSubscriptionStatus =
  (channelId) => async (dispatch, getState) => {
    try {
      const { data } = await requestVideos("/subscriptions", {
        params: {
          part: "snippet",
          forChannelId: channelId,
          mine: true,
        },
        headers: {
          Authorization: `Bearer ${getState().auth.accessToken}`,
        },
      });
      dispatch({
        type: CHANNEL_SUBSCRIPTION_STATUS,
        payload: data.items.length !== 0,
      });
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      // dispatch({
      //   type: CHANNEL_DETAILS_FAIL,
      //   payload: error.response.data,
      // });
    }
  };
