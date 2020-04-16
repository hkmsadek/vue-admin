import Vue from 'vue'
import Router from 'vue-router' 
import adminNewsOverveiw from '@/components/news/adminNewsOverveiw'
import adminMyNews from '@/components/news/adminMyNews'
import adminPostNews from '@/components/news/adminPostNews'
import adminFeatureNews from '@/components/news/adminFeatureNews'
import adminCardNews from '@/components/news/adminCardNews'
import adminMostViewNews from '@/components/news/adminMostViewNews'
import adminNewsCategory from '@/components/news/adminNewsCategory'

import adminCommunityOverveiw from '@/components/community/adminCommunityOverveiw'
import adminCommunityCategory from '@/components/community/adminCommunityCategory'
import adminCommunitySubCategory from '@/components/community/adminCommunitySubCategory'
import adminCommunityTopic from '@/components/community/adminCommunityTopic'
import adminCommunityReport from '@/components/community/adminCommunityReport'
import adminCommunityPost from '@/components/community/adminCommunityPost'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'adminNewsOverveiw',
      component: adminNewsOverveiw
    },
    {
      path: '/adminNewsOverveiw',
      name: 'adminNewsOverveiw',
      component: adminNewsOverveiw
    },
      {
      path: '/adminMyNews',
      name: 'adminMyNews',
      component: adminMyNews
    },
      {
      path: '/adminPostNews',
      name: 'adminPostNews',
      component: adminPostNews
    },
      {
      path: '/adminFeatureNews',
      name: 'adminFeatureNews',
      component: adminFeatureNews
    },
      {
      path: '/adminCardNews',
      name: 'adminCardNews',
      component: adminCardNews
    },
    {
      path: '/adminMostViewNews',
      name: 'adminMostViewNews',
      component: adminMostViewNews
    },
     {
      path: '/adminNewsCategory',
      name: 'adminNewsCategory',
      component: adminNewsCategory
    },
     {
      path: '/adminCommunityOverveiw',
      name: 'adminCommunityOverveiw',
      component: adminCommunityOverveiw
    },
     {
      path: '/adminCommunityCategory',
      name: 'adminCommunityCategory',
      component: adminCommunityCategory
    },
     {
      path: '/adminCommunitySubCategory',
      name: 'adminCommunitySubCategory',
      component: adminCommunitySubCategory
    },
    {
      path: '/adminCommunityTopic',
      name: 'adminCommunityTopic',
      component: adminCommunityTopic
    },
    {
      path: '/adminCommunityReport',
      name: 'adminCommunityReport',
      component: adminCommunityReport 
    },
    {
      path: '/adminCommunityPost',
      name: 'adminCommunityPost',
      component: adminCommunityPost 
    }
  ]
})
