import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { Post } from '../../../domain/model/post';
import Typographies from '../molecules/Typographies';
import Id from '../atoms/Id';
import Sentence from '../atoms/Sentence';

type Props = {
  post: Post;
};

const PostDetailOrganism: React.FC<Props> = (props) => {
  const { post } = props;

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardHeader title={post.title} />
      <CardContent>
        <Typographies
          elements={[
            <Id key="id" label="ID" val={post.id} linkPath="" />,
            <Id
              key="userId"
              label="ユーザーID"
              val={post.userId}
              linkPath={`/users/${post.userId}`}
            />,
            <Sentence key="body" label="Body" val={post.body} />,
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default PostDetailOrganism;
