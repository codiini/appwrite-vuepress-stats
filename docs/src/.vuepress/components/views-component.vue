<template>
	<div class="views-container">
		<p>{{ numberOfViews }} Views</p>
	</div>
</template>

<script>
import { database } from "../../utils/index.js";
export default {
	data() {
		return {
			numberOfViews: 0,
		};
	},
	async mounted() {
		await this.addToViewCount();
	},
	methods: {
		async addToViewCount() {
			try {
				await this.getViewCount();
				this.numberOfViews++;
				await database.updateDocument(
					"[DATABASE_ID]",
					"[COLLECTION_ID]",
					"[DOCUMENT_ID]",
					{
						viewsCount: this.numberOfViews,
					}
				);
			} catch (error) {
				console.log(error);
			}
		},
		async getViewCount() {
			try {
				let promise = await database.listDocuments(
					"[DATABASE_ID]",
					"[COLLECTION_ID]"
				);
				this.numberOfViews = promise.documents[0].viewsCount;
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style lang="css">
.views-container {
	font-size: 20px;
}
</style>
