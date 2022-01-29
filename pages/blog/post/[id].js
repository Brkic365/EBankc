import React from "react";
import styles from "../../../styles/Post.module.scss";

import BlogPost from "../../../components/BlogPost";

function Post() {
  const post = {
    title: "How stablecoins can help you increase ebtc in a bear market",
    text: "Traditional and digital assets are in a bear market due to rising inflation and threat of interest rate hikes from the US Federal Reserve",
    img: "money.jpg",
  };

  return (
    <div className={styles.post}>
      <div className={styles.topBanner}>
        <BlogPost post={post} noBottomText={true} />
      </div>
      <p>
        In recent weeks, both digital asset and traditional markets have been
        trending downwards. Investors across the globe have been spooked by
        rising inflation and expectations of interest rate increases by the US
        Federal Reserve, with stock markets and cryptocurrencies suffering as a
        result. Stablecoins offer an alternative to investors looking to
        continue making money, even in a bear market. In the US, for example,
        inflation recently hit 7%. Meanwhile, despite the central bank
        signalling plans to start raising interest rates, they will be going up
        incrementally from a very low base {"–"} currently set at just 0-0.25%.
        In short, parking one{"’"}s savings in a bank and forgetting about them
        remains an unprofitable option, while market volatility makes investing
        difficult. During times like these, it is particularly important to have
        a strategy in place to continue protecting and growing your wealth. In
        such market conditions, stablecoins could offer you an opportunity to
        sit-out the volatility of other digital assets or stock markets, while
        earning annual interest rates that can still comfortably beat inflation
        in the developed world. As such, they can be a useful and important part
        of any digital asset wealth strategy. Stablecoins are a lower volatility
        alternative during bear markets, but they are not without risk. The
        golden rule is to never allocate assets you cannot afford to lose to
        digital asset strategies and always keep in mind the potential risks.
      </p>
    </div>
  );
}

export default Post;
