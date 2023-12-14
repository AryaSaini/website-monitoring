import { checkUrl } from './source/tools/checkUrl';
import { IRequest, urls } from './source/tools/urls';

const checkUrls = async (requests: IRequest[]): Promise<void> => {
    await Promise.all(
        requests.map(async (request): Promise<void> => {
            await checkUrl(request.url, request.config);
        })
    );
};

checkUrls(urls);
