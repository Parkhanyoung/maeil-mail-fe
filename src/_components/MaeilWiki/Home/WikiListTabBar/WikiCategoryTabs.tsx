'use client';

import QueryLink from '@/_components/common/QueryLink';
import {
  WIKI_CATEGORY,
  WIKI_CATEGORY_TAB_OPTION,
  WIKI_CATEGORY_TAB_OPTION_KO,
} from '../../_constants/wikiCategory';
import { WikiCategoryTabOption } from '../../_types/wikiCategory';
import { wikiCategoryTab, wikiCategoryTabBar } from './wikiListTabBar.css';

interface WikiCategoryTabsProps {
  selectedOption: WikiCategoryTabOption;
}

const categories = Object.values(WIKI_CATEGORY);

export default function WikiCategoryTabs({ selectedOption }: WikiCategoryTabsProps) {
  return (
    <div className={wikiCategoryTabBar}>
      <QueryLink appendedQuery={{ category: WIKI_CATEGORY_TAB_OPTION.all, page: 1 }}>
        <div
          className={wikiCategoryTab({
            isSelected: selectedOption === WIKI_CATEGORY_TAB_OPTION.all,
          })}
        >
          {WIKI_CATEGORY_TAB_OPTION_KO[WIKI_CATEGORY_TAB_OPTION.all]}
        </div>
      </QueryLink>
      {categories.map((category) => {
        return (
          <QueryLink key={category} appendedQuery={{ category, page: 1 }}>
            <div className={wikiCategoryTab({ isSelected: selectedOption === category })}>
              {WIKI_CATEGORY_TAB_OPTION_KO[category]}
            </div>
          </QueryLink>
        );
      })}
    </div>
  );
}
