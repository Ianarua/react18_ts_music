import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { RecommendWrapper } from '@/views/discover/child-pages/recommend/components/hot/style';
import AreaHeaderV1 from '@/components/area-header-v1';
import { useAppSelector } from '@/store';
import { shallowEqual } from 'react-redux';
import SongMenuItem from '@/components/song-menu-item';

interface IProps {
    children?: ReactNode;
}

const HotRecommend: FC<IProps> = (props) => {
    const { hotRecommends } = useAppSelector(state => ({
        hotRecommends: state.recommend.hotRecommend
    }), shallowEqual);
    return (
        <RecommendWrapper>
            <AreaHeaderV1
                title="热门推荐"
                keywords={ ['华语', '流行', '摇滚', '民谣', '电子'] }
                moreLink="/discover/songs"
            />
            <div className="recommend-list">
                {
                    hotRecommends.map(item => {
                        return <SongMenuItem key={ item.id } itemData={ item }/>;
                    })
                }
            </div>
        </RecommendWrapper>
    );
};

export default memo(HotRecommend);
