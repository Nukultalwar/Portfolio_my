import { useState, useEffect } from 'react';
import { GitHubStats } from '../types';

const USERNAME = 'Nukultalwar';

export const useGitHubData = () => {
  const [data, setData] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchGitHub = async () => {
      try {
        setLoading(true);
        // Fetch User Profile
        const userRes = await fetch(`https://api.github.com/users/${USERNAME}`, {
          headers: { Accept: 'application/vnd.github.v3+json' },
        });

        if (!userRes.ok) {
          throw new Error(`GitHub API returned status ${userRes.status}`);
        }

        const userData = await userRes.json();

        // Fetch Recent Repositories
        const reposRes = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`,
          { headers: { Accept: 'application/vnd.github.v3+json' } }
        );

        let reposList: any[] = [];
        if (reposRes.ok) {
          reposList = await reposRes.json();
        }

        if (isMounted) {
          setData({
            publicRepos: userData.public_repos || 0,
            followers: userData.followers || 0,
            following: userData.following || 0,
            avatarUrl: userData.avatar_url || `https://github.com/${USERNAME}.png`,
            profileUrl: userData.html_url || `https://github.com/${USERNAME}`,
            bio: userData.bio || 'Software Engineer & Frontend Developer',
            recentRepos: reposList.map((r: any) => ({
              name: r.name,
              description: r.description || 'Public repository by Nukul Talwar',
              htmlUrl: r.html_url,
              language: r.language || 'JavaScript',
              stars: r.stargazers_count || 0,
              forks: r.forks_count || 0,
              updatedAt: new Date(r.updated_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              }),
            })),
          });
          setIsLive(true);
          setError(null);
        }
      } catch (err: any) {
        if (isMounted) {
          console.warn('GitHub API rate limit or network issue; displaying profile fallback:', err);
          setError(err.message || 'Failed to fetch live stats');
          // Verified fallback based on confirmed public state
          setData({
            publicRepos: 7,
            followers: 0,
            following: 0,
            avatarUrl: `https://github.com/${USERNAME}.png`,
            profileUrl: `https://github.com/${USERNAME}`,
            bio: 'Software Engineer & Frontend Developer',
            recentRepos: [
              {
                name: 'prodcast-website',
                description: 'Audio streaming and podcast web platform built with modern web technologies.',
                htmlUrl: `https://github.com/${USERNAME}/prodcast-website`,
                language: 'JavaScript',
                stars: 0,
                forks: 0,
                updatedAt: 'Recent'
              }
            ],
          });
          setIsLive(false);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchGitHub();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, isLive, error };
};

export default useGitHubData;
