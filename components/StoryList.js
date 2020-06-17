import Link from 'next/link';

const StoryList = ({ stories }) => {
  return (
    <div className='story-list'>
      {stories.map((story) => {
        return (
          <div key={story.id} className='story'>
            <h2 className='story-title'>
              <a href={story.url}>{story.title}</a>
            </h2>
            <div className='story-details'>
              <span>{story.points || 0} points</span>
              <Link href={`/story?id=${story.id}`}>
                <a>{story.comments_count || 0} comments</a>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StoryList;
