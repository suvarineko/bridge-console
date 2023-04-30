import * as React from 'react';
import * as semver from 'semver';
import { useTranslation } from 'react-i18next';
// import { FlagIcon } from '@patternfly/react-icons';

import { useOpenShiftVersion } from '@console/shared/src';
import {
  GettingStartedCard,
  GettingStartedLink,
} from '@console/shared/src/components/getting-started';
import { DOC_URL_OPENSHIFT_WHATS_NEW } from '../../../../utils';

export const ExploreAdminFeaturesGettingStartedCard: React.FC = () => {
  const { t } = useTranslation();
  const parsed = semver.parse(useOpenShiftVersion());
  // Show only major and minor version.
  const version = parsed ? `${parsed.major}.${parsed.minor}` : '';

  const links: GettingStartedLink[] = [
    // {
    //   id: 'api-explorer',
    //   title: t('public~API Explorer'),
    //   href: '/api-explorer',
    // },
    // {
    //   id: 'operatorhub',
    //   title: t('public~OperatorHub'),
    //   href: '/operatorhub',
    // },
    // {
    //   id: 'userdoc',
    //   title: t('public~FAQ пользователя кластера'),
    //   href: 'https://dzo.sw.sbc.space/wiki/display/OSAD/Kubernetes',
    //   external: true
    // },
    {
      id: 'k8sdoc',
      title: t('public~Документация kubernetes'),
      href: 'https://v1-21.docs.kubernetes.io/docs/tutorials/',
      external: true
    },
    {
      id: 'istiodoc',
      title: t('public~Документация Istio'),
      href: 'https://istio.io/latest/docs/ops/best-practices/',
      external: true
    },
  ];

  const moreLink: GettingStartedLink = {
    id: 'whats-new',
    title: t("public~See what's new in OpenShift {{version}}", { version }),
    href: DOC_URL_OPENSHIFT_WHATS_NEW,
    external: true,
  };

  return (
    <GettingStartedCard
      id="admin-features"
      // icon={<FlagIcon color="var(--co-global--palette--orange-400)" aria-hidden="true" />}
      title={t('public~')}
      // title={t('public~Explore new admin features')}
      titleColor={'var(--co-global--palette--orange-400)'}
      // description={t('public~Explore new features and resources within the admin perspective.')}
      links={links}
      moreLink={moreLink}
    />
  );
};

