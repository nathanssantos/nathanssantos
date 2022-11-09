import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const { GITHUB_USERNAME } = process.env;

type Message = { message: String };

type Data = Repository[] | Message;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);

    const { status, data } = response;

    if (status !== 200 || !data) {
      res.status(500).json({
        message: `It wasn't possible to get the public repositories of the user: ${GITHUB_USERNAME}`,
      });

      return;
    }

    const favoriteRepositories = [
      'evolution-graph',
      'clockify-teams',
      'portfolio',
      'react-vite-boilerplate',
      'react-native-boilerplate',
      'podjs',
    ];

    const filteredRepositories = data.filter(({ name }: Repository) =>
      favoriteRepositories?.includes(name),
    );

    res.status(200).json(filteredRepositories);
  } catch (error) {
    res.status(500).json({ message: 'Server ERROR' });
  }
}
