import { StatusCodes } from "http-status-codes";
import axios from "axios";

/* desc: Standard function to call ID's for a paticular category */
const getIDs = async (customUrl) => {
  const url = `https://hacker-News.firebaseio.com/v0/${customUrl}`;
  const response = await axios.get(url);
  return response.data;
};

/*  desc: Function to Get the News Articles from the given IDs  */
const getNewsArticles = async (ids) => {
  const articles = await Promise.all(
    ids.map(async (id) => {
      const articleUrl = `https://hacker-News.firebaseio.com/v0/item/${id}.json`;
      const articleResponse = await axios.get(articleUrl);
      return articleResponse.data;
    })
  );
  return articles;
};

/* desc: Retrieve Top Stories data          route:api/v1/news/top-news */
export const getTopStories = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  // sending request to get top news IDs
  const topStoryIDs = await getIDs("topstories.json");
  if (!topStoryIDs)
    return res.status(StatusCodes.BAD_REQUEST).json("Bad Request, try again");

  // Calculate the the length of the Array to fetch based on the page and limit
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedIDs = topStoryIDs.slice(startIndex, endIndex);

  // Sending request to get the actual News articles
  const data = await getNewsArticles(paginatedIDs);
  res.status(StatusCodes.OK).json({ data: data, count: topStoryIDs.length });
};

/* desc: Retrieve Best Stories data          route:api/v1/news/best-news  */
export const getBestStories = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  // sending request to get top news IDs
  const bestStoriesIDs = await getIDs("beststories.json");
  if (!bestStoriesIDs)
    return res.status(StatusCodes.BAD_REQUEST).json("Bad Request, try again");

  // Calculate the the length of the Array to fetch based on the page and limit
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedIDs = bestStoriesIDs.slice(startIndex, endIndex);

  // Sending request to get the actual News articles
  const data = await getNewsArticles(paginatedIDs);
  res.status(StatusCodes.OK).json({ data: data, count: bestStoriesIDs.length });
};

/* desc: Retrieve Latest Stories data          route:api/v1/news/latest-news  */
export const getNewStories = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  // sending request to get top news IDs
  const latestStoriesIDs = await getIDs("newstories.json");
  if (!latestStoriesIDs)
    return res.status(StatusCodes.BAD_REQUEST).json("Bad Request, try again");

  // Calculate the the length of the Array to fetch based on the page and limit
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedIDs = latestStoriesIDs.slice(startIndex, endIndex);

  // Sending request to get the actual News articles
  const data = await getNewsArticles(paginatedIDs);
  res
    .status(StatusCodes.OK)
    .json({ data: data, count: latestStoriesIDs.length });
};
