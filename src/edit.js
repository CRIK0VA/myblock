import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { format, dateI18n, getSettings } from '@wordpress/date';
import { PanelBody, ToggleControl, QueryControls } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { postsPerPage, showImage, order, orderBy, category } = attributes;
	const posts = useSelect(
		(select) => {
			return select('core').getEntityRecords('postType', 'post', {
				per_page: postsPerPage,
				_embed: true,
				order,
				orderby: orderBy,
				categories: category ? category : []
			});
		},
		[postsPerPage, order, orderBy, category]
	);

	const categories = useSelect(
		(select) => {
			return select('core').getEntityRecords('taxonomy', 'category', {
				per_page: -1,
			});
		},
		[]
	);

	const blockProps = useBlockProps();
	const onChangeToogleImage = (value) => {
		setAttributes({ showImage: value });
	};
	const onChangePostsPerPage = (value) => {
		setAttributes({ postsPerPage: value });
	};
	const onChangeOrder = (value) => {
		setAttributes({ order: value });
	};
	const onChangeOrderBy = (value) => {
		setAttributes({ orderBy: value });
	};
	const onChangeCategoryS = (value) => {
		setAttributes({ category: value });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<ToggleControl
						label="Display Images"
						checked={showImage}
						onChange={onChangeToogleImage}
					/>
					<QueryControls
						numberOfItems={postsPerPage}
						onNumberOfItemsChange={onChangePostsPerPage}
						maxItems={6}
						minItems={1}
						order={order}
						onOrderChange={onChangeOrder}
						orderBy={orderBy}
						onOrderByChange={onChangeOrderBy}
						categoriesList={categories}
						selectedCategoryId={category}
						onCategoryChange={onChangeCategoryS}
						
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				{posts &&
					posts.map((post) => {
						const featuredImage =
							post._embedded &&
							post._embedded['wp:featuredmedia'] &&
							post._embedded['wp:featuredmedia'].length > 0 &&
							post._embedded['wp:featuredmedia'][0];
						return (
							<div key={post.id}>
								{showImage && featuredImage && (
									<img
										src={
											featuredImage.media_details.sizes
												.large.source_url
										}
										alt={featuredImage.alt_text}
									/>
								)}
								{post.date_gmt && (
									<time dateTime={format('c', post.date_gmt)}>
										{dateI18n(
											getSettings().formats.date,
											post.date_gmt
										)}
									</time>
								)}
								<h2>
									<a href={post.link}>
										{post.title.rendered}
									</a>
								</h2>
							</div>
						);
					})}
			</div>
		</>
	);
}
