import { StatusCodes } from "http-status-codes";
import axios from "axios";

// desc: Standard function to call ID's for a paticular category
const getIDs = async (customUrl) => {
  const url = `https://hacker-News.firebaseio.com/v0/${customUrl}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data");
  }
};

// desc: Retrieve Top Stories data          route:api/v1/news/top-news
export const getTopStories = async (req, res) => {
  const topStoryIDs = await getIDs("topstories.json");
  if (!topStoryIDs)
    return res.status(StatusCodes.BAD_REQUEST).json("Bad Request, try again");

  // Use Promise.all for parallel fetching of articles
  const articles = await Promise.all(
    topStoryIDs.map(async (id) => {
      const articleUrl = `https://hacker-News.firebaseio.com/v0/item/${id}.json`;
      const articleResponse = await axios.get(articleUrl);
      return articleResponse.data; // Destructure directly
    })
  );

  // Combine articles into a single array
  const allArticles = articles.filter((article) => article !== null); // Filter out potential null values

  res.status(StatusCodes.OK).json(allArticles);
};

// desc: Retrieve Best Stories data          route:api/v1/news/best-news
export const getBestStories = async (req, res) => {
  const bestStoriesIDs = await getIDs("beststories.json");
  if (!bestStoriesIDs)
    return res.status(StatusCodes.BAD_REQUEST).json("Bad Request, try again");

  // Use Promise.all for parallel fetching of articles
  const articles = await Promise.all(
    bestStoriesIDs.map(async (id) => {
      const articleUrl = `https://hacker-News.firebaseio.com/v0/item/${id}.json`;
      const articleResponse = await axios.get(articleUrl);
      return articleResponse.data; // Destructure directly
    })
  );

  // Combine articles into a single array
  const allArticles = articles.filter((article) => article !== null); // Filter out potential null values

  res.status(StatusCodes.OK).json(allArticles);
};

// desc: Retrieve Latest Stories data          route:api/v1/news/latest-news
export const getNewStories = async (req, res) => {
  const latestStoriesIDs = await getIDs("newstories.json");
  if (!latestStoriesIDs)
    return res.status(StatusCodes.BAD_REQUEST).json("Bad Request, try again");

  // Use Promise.all for parallel fetching of articles
  const articles = await Promise.all(
    latestStoriesIDs.map(async (id) => {
      const articleUrl = `https://hacker-News.firebaseio.com/v0/item/${id}.json`;
      const articleResponse = await axios.get(articleUrl);
      return articleResponse.data; // Destructure directly
    })
  );

  // Combine articles into a single array
  const allArticles = articles.filter((article) => article !== null); // Filter out potential null values

  res.status(StatusCodes.OK).json(allArticles);
};
