import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';

import IconBlock from '../assets/block.png';
import IconComment from '../assets/comment.png';
import IconDownvoteActive from '../assets/downvote_active.png';
import IconDownvoteInactive from '../assets/downvote_inactive.png';
import IconShare from '../assets/share.png';
import IconUpvoteActive from '../assets/upvote_active.png';
import IconUpvoteInactive from '../assets/upvote_inactive.png';

import {useVoteContext} from '../contexts/VoteContext';
import {useCommentContext} from '../contexts/CommentContext';

function FeedScreen() {
  const navigation: any = useNavigation();
  const isFocus = useIsFocused();

  const {setTotalVote, totalVote} = useVoteContext();
  const {dataComment} = useCommentContext();

  useEffect(() => {}, [isFocus]);

  const RedMore = () => {
    return <Text style={{color: '#562ae8'}}>More</Text>;
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable onPress={() => navigation.navigate('post-detail')}>
          <View>
            <View
              style={{
                height: 64,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
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
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  padding: 10,
                }}>
                <Text numberOfLines={3} style={{maxWidth: '90%'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,
                  consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.
                  Integer et nunc ut tellus tinci, consectetur adipiscing elit.
                  Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus
                  tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut
                  tellus tinci, consectetur adipiscing elit. Nulla luctus in
                  ipsum ac dictum.
                </Text>
                <RedMore />
              </View>
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
                  {totalVote}
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
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

export default FeedScreen;
