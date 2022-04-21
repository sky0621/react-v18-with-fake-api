import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { Comment } from '../../domain/model/comment';
import Typographies from '../molecules/Typographies';
import Id from '../atoms/Id';
import Email from '../atoms/Email';
import Sentence from '../atoms/Sentence';

type Props = {
  comment: Comment;
};

const CommentDetailOrganism: React.FC<Props> = (props) => {
  const { comment } = props;

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardHeader title={comment.name} />
      <CardContent>
        <Typographies
          elements={[
            <Id key="id" label="ID" val={comment.id} linkPath="" />,
            <Id
              key="postId"
              label="POST ID"
              val={comment.postId}
              linkPath={`/posts/${comment.postId}`}
            />,
            <Email key="email" val={comment.email} />,
            <Sentence key="body" label="Body" val={comment.body} />,
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default CommentDetailOrganism;
