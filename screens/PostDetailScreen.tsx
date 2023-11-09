import React, {useState} from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Keyboard} from 'react-native';

import IconBack from '../assets/back.png';
import IconBlock from '../assets/block.png';
import IconComment from '../assets/comment.png';
import IconDownvoteActive from '../assets/downvote_active.png';
import IconDownvoteInactive from '../assets/downvote_inactive.png';
import IconShare from '../assets/share.png';
import IconUpvoteActive from '../assets/upvote_active.png';
import IconUpvoteInactive from '../assets/upvote_inactive.png';
import {useVoteContext} from '../contexts/VoteContext';
import {useCommentContext} from '../contexts/CommentContext';

function PostDetailScreen() {
  const navigation = useNavigation();

  const [commentInput, setCommentInput] = useState<string>('');
  const {setTotalVote, totalVote} = useVoteContext();
  const {dataComment, setDataComment} = useCommentContext();

  const handleAddComment = () => {
    let newData = {
      name: 'Anonymous Comment',
      text: commentInput,
    };

    if (commentInput.length > 0) {
      let data: any = dataComment;
      data.push(newData);
      setDataComment(data);
      setCommentInput('');
      Keyboard.dismiss();
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View>
          <View
            style={{
              height: 64,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={IconBack}
                height={18}
                width={18}
                style={{marginLeft: 22}}
              />
            </Pressable>
            <Image
              source={{
                uri: 'https://picsum.photos/200',
              }}
              width={48}
              height={48}
              style={{borderRadius: 24, marginLeft: 24}}
            />
            <View style={{marginLeft: 16}}>
              <Text
                style={{fontWeight: '600', fontSize: 14, lineHeight: 16.94}}>
                Usup Suparma
              </Text>
              <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
                Mar 27, 2023
              </Text>
            </View>
          </View>
          <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
          <View>
            <Text style={{margin: 24}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,
              consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.
              Integer et nunc ut tellus tinci, consectetur adipiscing elit.
              Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci
              Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,
              consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.
            </Text>
            <Image
              source={{
                uri: 'https://picsum.photos/200',
              }}
              height={200}
            />
          </View>
          <View
            style={{
              height: 52,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <Image
                source={IconShare}
                height={18}
                width={18}
                style={{marginLeft: 22}}
              />
              <Image
                source={IconComment}
                height={18}
                width={18}
                style={{marginLeft: 24}}
              />
              <Text
                style={{
                  width: 24,
                  marginHorizontal: 4,
                  textAlign: 'center',
                }}>
                {dataComment.length ?? 0}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={IconBlock}
                height={18}
                width={18}
                style={{marginLeft: 22}}
              />
              <Pressable onPress={() => setTotalVote(totalVote - 1)}>
                <Image
                  source={IconDownvoteInactive}
                  height={18}
                  width={18}
                  style={{marginLeft: 24}}
                />
              </Pressable>
              <Text
                style={{
                  width: 24,
                  marginHorizontal: 11,
                  textAlign: 'center',
                }}>
                {totalVote ?? 0}
              </Text>
              <Pressable onPress={() => setTotalVote(totalVote + 1)}>
                <Image
                  source={IconUpvoteInactive}
                  height={18}
                  width={18}
                  style={{marginRight: 22}}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{height: 4, backgroundColor: '#C4C4C4'}} />
        {dataComment.length > 0 &&
          dataComment.map((res: any, i) => (
            <View key={i}>
              <View
                style={{
                  flexDirection: 'row',
                  minHeight: 72,
                  paddingVertical: 16,
                  paddingHorizontal: 24,
                }}>
                <Image
                  source={{
                    uri: 'https://picsum.photos/200',
                  }}
                  width={36}
                  height={36}
                  style={{borderRadius: 24, marginRight: 16}}
                />
                <View style={{width: '90%'}}>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 12,
                      lineHeight: 14.52,
                      color: '#828282',
                    }}>
                    {res.name}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 16,
                      lineHeight: 19.36,
                    }}>
                    {res.text}
                  </Text>
                </View>
              </View>

              <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
            </View>
          ))}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 24,
          paddingVertical: 10,
        }}>
        <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
        <TextInput
          placeholder="Enter Comment"
          style={{flex: 1}}
          value={commentInput}
          onChangeText={setCommentInput}
        />
        <Button title="Comment" onPress={handleAddComment} />
      </View>
    </SafeAreaView>
  );
}

export default PostDetailScreen;
