<script setup lang="ts">
import FeatureCard from '@/components/Common/FeatureCard.vue'
import { IFeatureCard } from '@/types/Interfaces/feature-card'

const testDataFeatureCards: IFeatureCard[] = [
  {
    image: '@/assets/images/seed-drop.png',
    alt: 'Yield Aggregator illustration',
    title: 'Yield Aggregator',
    step: 1,
    description: {
      title: 'One-click yield aggregation',
      text: 'Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity',
    },
  },
  {
    image: '@/assets/images/sprout.png',
    alt: 'Yield-backed Stablecoin illustration',
    title: 'Yield-backed Stablecoin',
    step: 2,
    description: {
      title: 'Unlock liquidity with BYD',
      text: 'Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time',
    },
  },
  {
    image: '@/assets/images/money-plant.png',
    alt: 'Boost DeFi Liquidity illustration',
    title: 'Boost DeFi Liquidity',
    step: 3,
    description: {
      title: 'Boost protocols, earn more',
      text: 'Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards.',
    },
  },
]

</script>

<template>
<section class="container">
  <div class="title mb-44 text-5xl">What is Backyard?</div>
  <div>
    <FeatureCard
      v-for="(card, index) in testDataFeatureCards"
      :key="index"
      :image="card.image"
      :alt="card.alt"
      :title="card.title"
      :description="card.description"
    />
  </div>
</section>
</template>
